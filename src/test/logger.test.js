import { describe, it, expect, vi } from 'vitest';
import { logger } from '../utils/logger';

describe('Logger', () => {
  it('logs info messages with timestamp prefix', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logger.info('test message');

    expect(spy).toHaveBeenCalledTimes(1);
    const loggedMessage = spy.mock.calls[0][0];
    expect(loggedMessage).toContain('[INFO]');
    expect(loggedMessage).toContain('test message');
    spy.mockRestore();
  });

  it('logs warn messages', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    logger.warn('warning!');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toContain('[WARN]');
    spy.mockRestore();
  });

  it('logs error messages', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    logger.error('something failed');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toContain('[ERROR]');
    spy.mockRestore();
  });
});
